import { SignIn } from "@clerk/nextjs";
import '../../../globals.css'

export default function Page() {
  return <div className="signin">
   
  <SignIn />
  
  </div>;
}