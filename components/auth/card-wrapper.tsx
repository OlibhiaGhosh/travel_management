"use client"

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
    
 } from "@/components/ui/card";
import { HeaderComponent } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerText: string;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerText,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
} : CardWrapperProps) => {

    return (
        <Card className="mt-auto w-[400px] shadow-md" >
            <CardHeader>
                <HeaderComponent header={headerText} label={headerLabel}/>
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter className=" flex justify-center items-center">
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}