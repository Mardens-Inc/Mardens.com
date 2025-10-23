import {Autocomplete, AutocompleteItem, Button, Form, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, NumberInput, Radio, RadioGroup, Select, SelectItem} from "@heroui/react";

export function GiftCards()
{
    return (
        <div className={"flex flex-col max-w-3xl mb-16 mx-auto items-center"}>
            <GiftCardForm showNextButton/>
        </div>
    );
}

type GiftCardFormProps = {
    showNextButton?: boolean;
}

function GiftCardForm(props: GiftCardFormProps)
{
    const {showNextButton} = props;
    return (
        <div className={"flex flex-col max-w-3xl mx-auto items-center"}>
            <p className={"text-3xl font-accent"}>Make a day with a</p>
            <p className={"text-5xl text-primary uppercase mb-2 font-headers font-bold"}>Marden's gift card!</p>
            <p className={"text-center mb-10"}>Whether you’re buying for the person who has everything or the person who wants everything, Marden’s has something for everyone.</p>
            <p className={"font-headers text-3xl font-bold w-full uppercase"}>step 1 of 2</p>
            <p className={"text-center mt-4 mb-4"}><b>We do not issue electronic gift cards.</b>You can expect your gift card to arrive at the given address <b>7-10 days from purchase</b>. All orders are sent via USPS and may be subject to carrier delays.</p>
            <Form
                className={"w-full gap-6"}
            >
                <Select
                    label={"Marden's Gift Card Options"}
                    isRequired
                    placeholder={"Please select a value"}
                    radius={"none"}
                    variant={"bordered"}
                    classNames={{
                        trigger: "border-3 hover:!border-primary focus:!border-primary"
                    }}
                    description={"Please choose a gift card amount from the available options."}
                    defaultSelectedKeys={["20"]}
                    selectionMode={"single"}
                    disallowEmptySelection
                >
                    <SelectItem key={"20"}>$20 Gift Card</SelectItem>
                    <SelectItem key={"25"}>$25 Gift Card</SelectItem>
                    <SelectItem key={"50"}>$50 Gift Card</SelectItem>
                    <SelectItem key={"75"}>$75 Gift Card</SelectItem>
                    <SelectItem key={"100"}>$100 Gift Card</SelectItem>
                    <SelectItem key={"200"}>$200 Gift Card</SelectItem>
                    <SelectItem key={"250"}>$250 Gift Card</SelectItem>
                    <SelectItem key={"custom"}>Custom Amount</SelectItem>
                </Select>

                <NumberInput
                    label={"Quantity"}
                    isRequired
                    radius={"none"}
                    variant={"bordered"}
                    description={<>Enter the number of gift cards you would like to purchase. <b>The value must be between 1 and 30.</b></>}
                    classNames={{
                        inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                        input: "text-black"
                    }}
                    defaultValue={1}
                    min={1}
                    max={30}
                />

                <Input
                    label={"Recipient Full Name"}
                    isRequired
                    radius={"none"}
                    variant={"bordered"}
                    classNames={{
                        inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                        input: "text-black"
                    }}
                    description={"Please enter the full name of the person who will receive this gift card"}
                />

                <Input
                    label={"Buyers Full Name"}
                    isRequired
                    radius={"none"}
                    variant={"bordered"}
                    classNames={{
                        inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                        input: "text-black"
                    }}
                    description={"Please enter the full name of the person purchasing this gift card"}
                />

                <Input
                    label={"Buyers Email"}
                    type={"email"}
                    isRequired
                    radius={"none"}
                    variant={"bordered"}
                    classNames={{
                        inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                        input: "text-black"
                    }}
                    description={"Please enter the full name of the person purchasing this gift card"}
                />

                <RadioGroup
                    label={"Recipient Country"}
                    isRequired
                    defaultValue={"us"}
                >
                    <Radio value={"us"}>United States</Radio>
                    <Radio value={"canada"}>Canada</Radio>
                </RadioGroup>
                <h2 className={"text-2xl font-black"}>Gift Card Mailing Address</h2>

                <Input
                    label={"Mailing Name"}
                    radius={"none"}
                    variant={"bordered"}
                    classNames={{
                        inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                        input: "text-black"
                    }}
                    description={"The gift card mailing name, if different from the recipient."}
                />
                <Input
                    label={"Street Address"}
                    isRequired
                    radius={"none"}
                    variant={"bordered"}
                    classNames={{
                        inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                        input: "text-black"
                    }}
                    description={"The gift card mailing street address."}
                />
                <div className={"flex flex-row gap-2"}>

                    <Input
                        label={"City"}
                        isRequired
                        radius={"none"}
                        variant={"bordered"}
                        classNames={{
                            inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                            input: "text-black"
                        }}
                        description={"The gift card mailing city."}
                    />
                    <Autocomplete
                        label={"State"}
                        defaultSelectedKey={"Maine"}
                        isRequired
                        radius={"none"}
                        variant={"bordered"}
                        description={"The gift card mailing state."}
                        inputProps={{
                            classNames: {
                                inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                                input: "text-black"
                            }
                        }}
                        popoverProps={{
                            radius: "none"
                        }}
                        listboxProps={{
                            itemClasses: {
                                base: [
                                    "rounded-none"
                                ]
                            }
                        }}
                    >
                        <AutocompleteItem key="Alabama">Alabama</AutocompleteItem>
                        <AutocompleteItem key="Alaska">Alaska</AutocompleteItem>
                        <AutocompleteItem key="American Samoa">American Samoa</AutocompleteItem>
                        <AutocompleteItem key="Arizona">Arizona</AutocompleteItem>
                        <AutocompleteItem key="Arkansas">Arkansas</AutocompleteItem>
                        <AutocompleteItem key="California">California</AutocompleteItem>
                        <AutocompleteItem key="Colorado">Colorado</AutocompleteItem>
                        <AutocompleteItem key="Connecticut">Connecticut</AutocompleteItem>
                        <AutocompleteItem key="Delaware">Delaware</AutocompleteItem>
                        <AutocompleteItem key="District of Columbia">District of Columbia</AutocompleteItem>
                        <AutocompleteItem key="Florida">Florida</AutocompleteItem>
                        <AutocompleteItem key="Georgia">Georgia</AutocompleteItem>
                        <AutocompleteItem key="Guam">Guam</AutocompleteItem>
                        <AutocompleteItem key="Hawaii">Hawaii</AutocompleteItem>
                        <AutocompleteItem key="Idaho">Idaho</AutocompleteItem>
                        <AutocompleteItem key="Illinois">Illinois</AutocompleteItem>
                        <AutocompleteItem key="Indiana">Indiana</AutocompleteItem>
                        <AutocompleteItem key="Iowa">Iowa</AutocompleteItem>
                        <AutocompleteItem key="Kansas">Kansas</AutocompleteItem>
                        <AutocompleteItem key="Kentucky">Kentucky</AutocompleteItem>
                        <AutocompleteItem key="Louisiana">Louisiana</AutocompleteItem>
                        <AutocompleteItem key="Maine">Maine</AutocompleteItem>
                        <AutocompleteItem key="Maryland">Maryland</AutocompleteItem>
                        <AutocompleteItem key="Massachusetts">Massachusetts</AutocompleteItem>
                        <AutocompleteItem key="Michigan">Michigan</AutocompleteItem>
                        <AutocompleteItem key="Minnesota">Minnesota</AutocompleteItem>
                        <AutocompleteItem key="Mississippi">Mississippi</AutocompleteItem>
                        <AutocompleteItem key="Missouri">Missouri</AutocompleteItem>
                        <AutocompleteItem key="Montana">Montana</AutocompleteItem>
                        <AutocompleteItem key="Nebraska">Nebraska</AutocompleteItem>
                        <AutocompleteItem key="Nevada">Nevada</AutocompleteItem>
                        <AutocompleteItem key="New Hampshire">New Hampshire</AutocompleteItem>
                        <AutocompleteItem key="New Jersey">New Jersey</AutocompleteItem>
                        <AutocompleteItem key="New Mexico">New Mexico</AutocompleteItem>
                        <AutocompleteItem key="New York">New York</AutocompleteItem>
                        <AutocompleteItem key="North Carolina">North Carolina</AutocompleteItem>
                        <AutocompleteItem key="North Dakota">North Dakota</AutocompleteItem>
                        <AutocompleteItem key="Northern Mariana Islands">Northern Mariana Islands</AutocompleteItem>
                        <AutocompleteItem key="Ohio">Ohio</AutocompleteItem>
                        <AutocompleteItem key="Oklahoma">Oklahoma</AutocompleteItem>
                        <AutocompleteItem key="Oregon">Oregon</AutocompleteItem>
                        <AutocompleteItem key="Pennsylvania">Pennsylvania</AutocompleteItem>
                        <AutocompleteItem key="Puerto Rico">Puerto Rico</AutocompleteItem>
                        <AutocompleteItem key="Rhode Island">Rhode Island</AutocompleteItem>
                        <AutocompleteItem key="South Carolina">South Carolina</AutocompleteItem>
                        <AutocompleteItem key="South Dakota">South Dakota</AutocompleteItem>
                        <AutocompleteItem key="Tennessee">Tennessee</AutocompleteItem>
                        <AutocompleteItem key="Texas">Texas</AutocompleteItem>
                        <AutocompleteItem key="Utah">Utah</AutocompleteItem>
                        <AutocompleteItem key="U.S. Virgin Islands">U.S. Virgin Islands</AutocompleteItem>
                        <AutocompleteItem key="Vermont">Vermont</AutocompleteItem>
                        <AutocompleteItem key="Virginia">Virginia</AutocompleteItem>
                        <AutocompleteItem key="Washington">Washington</AutocompleteItem>
                        <AutocompleteItem key="West Virginia">West Virginia</AutocompleteItem>
                        <AutocompleteItem key="Wisconsin">Wisconsin</AutocompleteItem>
                        <AutocompleteItem key="Wyoming">Wyoming</AutocompleteItem>
                        <AutocompleteItem key="Armed Forces Americas">Armed Forces Americas</AutocompleteItem>
                        <AutocompleteItem key="Armed Forces Europe">Armed Forces Europe</AutocompleteItem>
                        <AutocompleteItem key="Armed Forces Pacific">Armed Forces Pacific</AutocompleteItem>
                    </Autocomplete>
                    <Input
                        label={"Zip Code"}
                        isRequired
                        radius={"none"}
                        variant={"bordered"}
                        classNames={{
                            inputWrapper: "border-3 hover:!border-primary focus-within:!border-primary",
                            input: "text-black"
                        }}
                        description={"The gift card mailing zip code."}
                    />
                </div>
            </Form>
            {showNextButton &&
                <Button
                    color={"secondary"}
                    className={"uppercase font-bold ml-auto"}
                    size={"lg"}
                    radius={"none"}
                >
                    Next
                </Button>
            }
            <p className={"mt-8 text-center"}>
                Gift cards can be purchased securely through our website. Please fill out your billing information, and you can expect your gift card to arrive at the given address <strong className={"font-black text-black"}>7-10 days from purchase</strong>. Marden’s will not store or share your information with any third party. <strong className={"font-black text-black underline"}>We do not issue electronic gift cards</strong>.
            </p>
            <p className={"mt-8"}>All orders are sent via USPS and may be subject to carrier delays.</p>
        </div>
    );
}

type GiftCardModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function GiftCardModal(props: GiftCardModalProps)
{
    return (
        <Modal
            backdrop={"blur"}
            classNames={{
                backdrop: "bg-black/50 backdrop-contrast-50 backdrop-blur-sm"
            }}
            size={"2xl"}
            scrollBehavior={"inside"}
            isOpen={props.isOpen}
            onClose={props.onClose}
            radius={"none"}
            hideCloseButton
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut"
                        }
                    },
                    exit: {
                        y: -800,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn"
                        }
                    }
                }
            }}
        >
            <ModalContent>
                <ModalBody className={"my-10"}>
                    <GiftCardForm/>
                    <p className={"text-center"}>Already have a gift card? <Link href={"https://www.storecard.com/vt"} showAnchorIcon isExternal className={"text-primary underline italic"}>Check your balance here!</Link></p>
                </ModalBody>
                <ModalFooter>
                    <Button radius={"none"} color={"secondary"}>Next</Button>
                    <Button radius={"none"} color={"danger"} variant={"light"} onPress={props.onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}