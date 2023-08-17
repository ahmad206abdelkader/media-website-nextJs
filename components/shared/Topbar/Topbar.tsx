
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import { OrganizationSwitcher, SignOutButton ,SignedIn } from "@clerk/nextjs";
import { LogOut } from 'react-feather'



function Topbar(){
    const isUserLoggedIn =true;

    return(
        
        //this is the topbar
        <nav className="topbar">
           
          
          <div>
            <div>
                <SignedIn>
                    <SignOutButton>
                        <div className="logOut">
                          
                            <LogOut className="logout"/>
                            
                        </div>
                    </SignOutButton>
                </SignedIn>
                
                
            </div>
            
          </div>
            
          <Link href='/' className="wools">
          <Image className="img" src="/wools.png" alt="wools" width={50} height={50}/>
          <p className="pwools">Wools</p>
          </Link>

          
          <OrganizationSwitcher />
        </nav>
    )
}

export default Topbar;