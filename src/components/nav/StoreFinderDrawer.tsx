import {Icon} from "@iconify-icon/react";
import {Button, Input, Link} from "@heroui/react";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";

// Helper function to load Google Maps API
function loadGoogleMapsScript(apiKey: string, libraries: string[]): Promise<void>
{
    return new Promise((resolve, reject) =>
    {
        // Check if already loaded
        if (window.google?.maps)
        {
            resolve();
            return;
        }

        // Check if script is already being loaded
        if (document.querySelector("script[src*=\"maps.googleapis.com\"]"))
        {
            // Wait for it to load
            const checkLoaded = setInterval(() =>
            {
                if (window.google?.maps)
                {
                    clearInterval(checkLoaded);
                    resolve();
                }
            }, 100);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(",")}&callback=initMap`;
        script.async = true;
        script.defer = true;

        // Create global callback
        (window as any).initMap = () =>
        {
            resolve();
        };

        script.onerror = () =>
        {
            reject(new Error("Failed to load Google Maps script"));
        };

        document.head.appendChild(script);
    });
}

type StoreFinderDrawerProps = {
    open: boolean;
    onClose: () => void;
}

const storesToShow: StoreLocationItemProps[] = [
    {
        name: "Waterville",
        address: "458 Kennedy Memorial Dr, Waterville, ME 04901",
        schedule: {
            open: 9, // 9AM
            close: 20 // 8PM
        }
    },
    {
        name: "Farmington",
        address: "634 Wilton Road, Farmington, ME",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Brewer",
        address: "564 Wilson St, Brewer, ME 04412",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Lewiston",
        address: "750 Main St, Lewiston, ME 04240",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Gray",
        address: "65 W Gray Rd, Gray, ME 04039",
        schedule: {
            open: 9,
            close: 18
        }
    },
    {
        name: "Ellsworth",
        address: "33 Mardens Way Suite A, Ellsworth, ME 04605",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Scarborough",
        address: "451 Payne Rd, Scarborough, ME 04074",
        schedule: {
            open: 9,
            close: 19
        }
    },
    {
        name: "Lincoln",
        address: "28 Main St, Lincoln, ME 04457",
        schedule: {
            open: 9,
            close: 18
        }
    },
    {
        name: "Biddeford",
        address: "435 Elm St, Biddeford, ME 04005",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Sanford",
        address: "1247 Main Street, Sanford, ME",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Calais",
        address: "189 Main St, Calais, ME 04619",
        schedule: {
            open: 9,
            close: 18
        }
    },
    {
        name: "Houlton",
        address: "120 North St, Houlton, ME 04730",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Presque Isle",
        address: "803 Main St, Presque Isle, ME 04769",
        schedule: {
            open: 9,
            close: 20
        }
    },
    {
        name: "Madawaska",
        address: "81 Fox St, Madawaska, ME 04756",
        schedule: {
            open: 9,
            close: 20
        }
    }
];

export function StoreFinderDrawer(props: StoreFinderDrawerProps)
{
    const {open, onClose} = props;

    const [searchInput, setSearchInput] = useState("");
    const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);
    const [distances, setDistances] = useState<Record<string, string>>({});
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    // Load Google Maps API
    useEffect(() =>
    {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (!apiKey || apiKey === "your_google_maps_api_key_here")
        {
            console.error("Google Maps API key not configured. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.");
            return;
        }

        loadGoogleMapsScript(apiKey, ["places"]).then(() =>
        {
            // Initialize autocomplete once Maps API is loaded
            if (inputRef.current && !autocompleteRef.current)
            {
                autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
                    types: ["(regions)"],
                    componentRestrictions: {country: "us"},
                    fields: ["address_components", "geometry", "formatted_address"]
                });

                autocompleteRef.current.addListener("place_changed", () =>
                {
                    const place = autocompleteRef.current?.getPlace();
                    if (place?.geometry?.location)
                    {
                        const lat = place.geometry.location.lat();
                        const lng = place.geometry.location.lng();
                        setUserLocation({lat, lng});

                        // Extract ZIP code from address components
                        const zipCode = place.address_components?.find(
                            component => component.types.includes("postal_code")
                        )?.short_name;

                        if (zipCode)
                        {
                            setSearchInput(zipCode);
                        }
                    }
                });
            }
        }).catch((err: Error) =>
        {
            console.error("Error loading Google Maps API:", err);
        });
    }, []);

    // Calculate distances when user location changes
    useEffect(() =>
    {
        if (!userLocation) return;

        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (!apiKey || apiKey === "your_google_maps_api_key_here") return;

        const service = new google.maps.DistanceMatrixService();
        const destinations = storesToShow.map(store => store.address);

        service.getDistanceMatrix(
            {
                origins: [new google.maps.LatLng(userLocation.lat, userLocation.lng)],
                destinations: destinations,
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.IMPERIAL
            },
            (response, status) =>
            {
                if (status === "OK" && response)
                {
                    const newDistances: Record<string, string> = {};
                    response.rows[0].elements.forEach((element, index) =>
                    {
                        if (element.status === "OK")
                        {
                            newDistances[storesToShow[index].name] = element.distance.text;
                        }
                    });
                    setDistances(newDistances);
                }
            }
        ).then();
    }, [userLocation]);

    const handleUseCurrentLocation = () =>
    {
        if (!navigator.geolocation)
        {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLoadingLocation(true);

        navigator.geolocation.getCurrentPosition(
            (position) =>
            {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                setUserLocation({lat, lng});

                // Reverse geocode to get ZIP code
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode(
                    {location: {lat, lng}},
                    (results, status) =>
                    {
                        setIsLoadingLocation(false);

                        if (status === "OK" && results && results[0])
                        {
                            const zipCode = results[0].address_components?.find(
                                component => component.types.includes("postal_code")
                            )?.short_name;

                            if (zipCode)
                            {
                                setSearchInput(zipCode);
                            }
                        }
                    }
                ).then();
            },
            (error) =>
            {
                setIsLoadingLocation(false);
                console.error("Error getting location:", error);
                alert("Unable to get your location. Please ensure location permissions are enabled.");
            }
        );
    };

    return (
        <div className={"fixed right-0 top-0 z-50 h-screen w-screen data-[open=true]:pointer-events-auto pointer-events-none"} data-open={open}>
            <motion.div
                className={"fixed inset-0 bg-black/50 backdrop-contrast-50 backdrop-blur-sm -z-10 data-[open=true]:pointer-events-auto pointer-events-none"} onClick={onClose}
                initial={{opacity: 0}}
                animate={{opacity: open ? 1 : 0}}
                data-open={open}
            />
            <motion.div
                className={"pt-24 w-[450px] px-8 max-w-[95vw] overflow-y-auto h-full ml-auto p-4 bg-white shadow-2xl flex flex-col gap-2 items-center text-center z-10"}
                initial={{opacity: 0, x: 200}}
                animate={{opacity: open ? 1 : 0, x: open ? 0 : 200}}
            >
                <Button isIconOnly radius={"full"} variant={"ghost"} className={"absolute right-4"} onPress={onClose}><Icon icon={"mingcute:close-line"}/></Button>
                <h2 className={"text-primary font-bold text-3xl uppercase"}>Select a Store</h2>
                <button
                    onClick={handleUseCurrentLocation}
                    disabled={isLoadingLocation}
                    className={"flex items-center underline text-black text-base relative hover:text-primary focus:text-primary transition disabled:opacity-50 cursor-pointer"}
                >
                    <Icon icon={isLoadingLocation ? "eos-icons:loading" : "tdesign:location"}/>
                    {isLoadingLocation ? " Getting location..." : " use my current location?"}
                </button>
                <p className={"text-xs text-center opacity-75 my-3 mx-auto max-w-xs"}>Each store is different—think different merchandise and different deals. Pick a favorite or stop by a few and find smart ways to save more.</p>

                <div className={"flex flex-row gap-1 w-full"}>
                    <Input
                        ref={inputRef}
                        placeholder={"Enter your ZIP or city"}
                        radius={"none"}
                        size={"lg"}
                        variant={"bordered"}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button radius={"none"} size={"lg"} className={"uppercase font-text"} color={"primary"}>find us</Button>
                </div>

                <div className={"flex flex-col gap-2 w-full overflow-auto"}>
                    {storesToShow.sort((a, b) => a.name.localeCompare(b.name)).map((store, index) => (
                        <StoreLocationItem
                            key={index}
                            {...store}
                            distance={distances[store.name]}
                        />
                    ))}
                </div>

            </motion.div>

        </div>
    );
}

type StoreLocationItemProps = {
    name: string;
    address: string;
    schedule: {
        // The time that the store opens (1 is 1am and 13 is 1pm)
        // 0 is 12am and 23 is 11pm.
        open: number,
        // The time that the store closes (1 is 1am and 13 is 1pm)
        // 0 is 12am and 23 is 11pm.
        close: number
    }
    distance?: string;
}

function StoreLocationItem(props: StoreLocationItemProps)
{
    const {name, address, schedule, distance} = props;

    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= schedule.open && currentHour < schedule.close;

    const formatTime = (hour: number) =>
    {
        const ampm = hour >= 12 ? "pm" : "am";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}${ampm}`;
    };

    const statusText = isOpen
        ? `Open today until ${formatTime(schedule.close)}`
        : `Closed • Opens ${formatTime(schedule.open)}`;

    return (
        <div className={"flex flex-col gap-2 w-full border-b border-black/10 py-4 font-text transition-none"}>
            <div className={"flex flex-row gap-2"}>
                <a href={`/locations/${name}`} className={"font-accent bg-[#f7f7f4] rotate-[-5deg] text-2xl py-2 px-4 hover:text-secondary hover:bg-primary transition-colors duration-100"}>{name}</a>
                <div className={"flex flex-row items-center ml-auto font-text"}>
                    <Button variant={"light"} radius={"none"} className={"text-xs uppercase"} startContent={<Icon icon={"fluent:list-24-filled"} width={16}/>} as={Link} href={`/locations/${name}`}>Details</Button>
                    {distance && (
                        <Button variant={"light"} radius={"none"} className={"text-xs uppercase"} startContent={<Icon icon={"material-symbols:distance-outline-rounded"} width={16}/>}>{distance}</Button>
                    )}
                </div>
            </div>
            <p className={"text-xs text-start"}>{address}</p>
            <p className={"text-xs text-start data-[open=true]:text-[#32993e] text-danger"} data-open={isOpen}>{statusText}</p>
        </div>
    );
}