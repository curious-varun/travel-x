import { UserSignupForm } from "@/components/forms/user-signup-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <div className="p-5 flex justify-center item-center h-screen ">
      <Tabs defaultValue="user" className="w-full border p-5 rounded-2xl border-orange-500 mt-4 max-w-[500px]">

        <TabsList className="gap-4 w-full ">
          <TabsTrigger value="user" className="w-full" >user</TabsTrigger>
          <TabsTrigger value="company" className="w-full"> company  </TabsTrigger>
        </TabsList>

        <TabsContent value="user" className="">
          <div className="mx-auto max-w-[500px] mt-20">
            <UserSignupForm />
          </div>
        </TabsContent>
        <TabsContent value="company" className="">
          company sign up  from
        </TabsContent>



      </Tabs>
    </div>
  )
}


