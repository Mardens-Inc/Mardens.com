import Stars from "../../images/badge-exclamation-background.svg";
import Spike from "../../images/spike-horizontal.svg";
import Map from "../../images/form-map.png";
import {Button, Form, Input} from "@heroui/react";
import {Icon} from "@iconify-icon/react";

export function NewsLetterCTA()
{
    return (
        <div className={"flex flex-col lg:flex-row"}>
            <div className={"hidden lg:flex flex-col items-center justify-center bg-primary border-primary text-center w-full lg:w-[40%] relative text-white p-4 min-h-[400px] lg:min-h-[703px] bg-cover bg-center"} style={{backgroundImage: `url("${Stars}")`}}>
                <div className={"absolute w-4 -right-4 top-0 bottom-0 bg-repeat-y bg-contain"} style={{backgroundImage: `url("${Spike}")`}}/>
                <img width="440" height="649" src={Map} alt="maine map" className={"max-w-full h-auto"}/>
            </div>
            <div className={"flex w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 justify-center items-center bg-secondary"}>
                <div className={"flex flex-col gap-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-2xl"}>
                    <p className={"font-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase"}>Get New Deals</p>
                    <p className={"font-headers text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-primary font-bold -mt-2"}>To your inbox</p>
                    <p className={"font-text uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-black pt-2 sm:pt-4"}>Step 1 of 2</p>
                    <Form className={"flex flex-col gap-6 sm:gap-8"}>
                        <Input
                            label={"First Name"}
                            radius={"none"}
                            isRequired
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-base sm:text-lg uppercase text-black",
                                input: "font-text text-base sm:text-lg text-black font-bold"
                            }}
                        />
                        <Input
                            label={"Last Name"}
                            radius={"none"}
                            isRequired
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-base sm:text-lg uppercase text-black",
                                input: "font-text text-base sm:text-lg text-black font-bold"
                            }}
                        />
                        <Input
                            label={"Email"}
                            radius={"none"}
                            isRequired
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-base sm:text-lg uppercase text-black",
                                input: "font-text text-base sm:text-lg text-black font-bold"
                            }}
                        />
                        <Input
                            label={"Cellphone Number"}
                            radius={"none"}
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-base sm:text-lg uppercase text-black",
                                input: "font-text text-base sm:text-lg text-black font-bold"
                            }}
                        />
                        <Button className={"uppercase font-bold font-text text-lg sm:text-xl w-full sm:w-auto sm:ml-auto"} color={"primary"} radius={"none"} size={"lg"}>next <Icon icon={"fluent:chevron-right-12-filled"}/></Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}