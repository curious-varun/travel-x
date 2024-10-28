'use client';
import Image from 'next/image';
import { Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Review {
  id: number
  overallRating: number
  description: string
  userId: number
  companyId: number
  userName: string
}

interface Post {
  id: number
  title: string
  description: string
  image?: string
  companyId: number
  date: string
}

interface Company {
  id: number
  name: string
  banner: string
  logo: string
  bio: string
  reviews: Review[]
  posts: Post[]
}

// Demo data
const demoCompany: Company = {
  id: 1,
  name: "TechInnovate Solutions",
  banner: "/placeholder.svg?height=400&width=1200",
  logo: "/placeholder.svg?height=150&width=150",
  bio: "TechInnovate Solutions is a cutting-edge technology company specializing in AI-driven software solutions. We're committed to pushing the boundaries of what's possible in tech, creating innovative products that solve real-world problems.",
  reviews: [
    { id: 1, overallRating: 4.5, description: "Excellent service! Their AI solutions have dramatically improved our business processes.", userId: 1, companyId: 1, userName: "John Doe" },
    { id: 2, overallRating: 5, description: "Incredible team to work with. They're always on the cutting edge of technology.", userId: 2, companyId: 1, userName: "Jane Smith" },
    { id: 3, overallRating: 4, description: "Great products, but their customer service could be a bit more responsive.", userId: 3, companyId: 1, userName: "Bob Johnson" },
  ],
  posts: [
    { id: 1, title: "Introducing Our New AI Platform", description: "We're excited to announce the launch of our latest AI platform, designed to revolutionize data analysis in the finance sector.", image: "/imnage.jpg", companyId: 1, date: "2023-06-15" },
    { id: 2, title: "TechInnovate Solutions Wins Innovation Award", description: "We're honored to have been recognized with the 2023 Tech Innovation Award for our contributions to AI development.", companyId: 1, date: "2023-05-22" },
    { id: 3, title: "Join Our Team: We're Hiring!", description: "We're looking for talented developers and AI specialists to join our growing team. Check out our careers page for more information.", companyId: 1, date: "2023-04-10" },
  ],
}

export default function CompanyProfile() {
  const company = demoCompany
  const averageRating = company.reviews.reduce((sum, review) => sum + review.overallRating, 0) / company.reviews.length

  return (
    <div className="">
      <div className="relative rounded-2xl h-64 md:h-80 border border-black overflow-hidden">
        <Image
          alt={`${company.name} Banner`}
          src='/imnage.jpg'
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute top-0 left-0 bg-white-100 m-2 rounded-full  bg-opacity-60 backdrop-blur-lg p-6 text-white max-w-2xl ">
          <div className="flex items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className='text-black font-bold dark:text-white text-2xl '>
                {company.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="ml-6">
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 mr-1" />
                <span className="font-bold font-xl">{averageRating.toFixed(1)}</span>
                <span className="ml-1">({company.reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-lg">{company.bio}</p>
              </CardContent>
            </Card>

            <Card className='mt-4'>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                nice rivews section
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="posts">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="posts">
                <div className="space-y-6">
                  {company.posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                        {post.image && (
                          <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        )}
                        <p className="text-gray-600">{post.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="space-y-6">
                  {company.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Avatar className="h-10 w-10 mr-4">
                            <AvatarFallback>{review.userName.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{review.userName}</p>
                            <div className="flex items-center">
                              <Star className="text-yellow-400 mr-1 h-4 w-4" />
                              <span className="font-bold">{review.overallRating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div >
  )
}

