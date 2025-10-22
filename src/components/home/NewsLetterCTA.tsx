import Stars from "../../images/badge-exclamation-background.svg";
import Spike from "../../images/spike-horizontal.svg";
import Map from "../../images/form-map.png";
import {Button, Form, Input} from "@heroui/react";
import {Icon} from "@iconify-icon/react";

export function NewsLetterCTA()
{
    return (
        <div className={"flex flex-row mb-20"}>
            <div className={"flex flex-col items-center justify-center bg-primary border-primary text-center w-[40%] relative text-white p-4 lg:flex lg:items-center lg:justify-center h-[703px] bg-cover bg-center"} style={{backgroundImage: `url("${Stars}")`}}>
                <div className={"absolute w-4 -right-4 top-0 bottom-0 bg-repeat-y bg-contain"} style={{backgroundImage: `url("${Spike}")`}}/>
                <img width="440" height="649" src={Map} alt="maine map"/>
            </div>
            <div className={"flex w-full pb-4 pt-8 justify-center items-center bg-secondary"}>
                <div className={"flex flex-col gap-4 w-1/2 mx-auto"}>
                    <p className={"font-accent text-5xl uppercase"}>Get New Deals</p>
                    <p className={"font-headers text-6xl uppercase text-primary font-bold -mt-4"}>To your inbox</p>
                    <p className={"font-text uppercase text-3xl font-black pt-4"}>Step 1 of 2</p>
                    <Form className={"flex flex-col gap-8"}>
                        <Input
                            label={"First Name"}
                            radius={"none"}
                            isRequired
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-lg uppercase text-black",
                                input: "font-text text-lg text-black font-bold"
                            }}
                        />
                        <Input
                            label={"Last Name"}
                            radius={"none"}
                            isRequired
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-lg uppercase text-black",
                                input: "font-text text-lg text-black font-bold"
                            }}
                        />
                        <Input
                            label={"Email"}
                            radius={"none"}
                            isRequired
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-lg uppercase text-black",
                                input: "font-text text-lg text-black font-bold"
                            }}
                        />
                        <Input
                            label={"Cellphone Number"}
                            radius={"none"}
                            classNames={{
                                inputWrapper: "border-3 border-primary",
                                label: "font-accent text-lg uppercase text-black",
                                input: "font-text text-lg text-black font-bold"
                            }}
                        />
                        <Button className={"uppercase font-bold font-text text-xl ml-auto"} color={"primary"} radius={"none"} size={"lg"}>next <Icon icon={"fluent:chevron-right-12-filled"}/></Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}