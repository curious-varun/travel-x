import { LoginCompanyForm } from "@/components/forms/company-login-form";
import { LoginUserForm } from "@/components/forms/user-login-form.page";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <Tabs defaultValue="user" className="m-2 w-[400px]">

      <TabsList className="gap-4 w-full ">
        <TabsTrigger value="user" className="w-full" >user</TabsTrigger>
        <TabsTrigger value="company" className="w-full"> company  </TabsTrigger>
      </TabsList>

      <TabsContent value="user" className="mt-20 ">
        <LoginUserForm />
      </TabsContent>
      <TabsContent value="company" className="mt-20">
        <LoginCompanyForm />
      </TabsContent>



    </Tabs>
  )
}


