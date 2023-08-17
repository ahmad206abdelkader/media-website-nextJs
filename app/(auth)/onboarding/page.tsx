import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function page(){
    return(
        <main>
            <UserButton afterSignOutUrl="/" />
            <h1 className=''>Onboarding</h1>
            
        </main>
    )
}

