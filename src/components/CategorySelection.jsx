import SearchBox from "@/components/SearchBox";
import { Card,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const CategorySelection=({
        searchQuery,
        setSearchQuery, 
        mockData, 
        setSelectedCategory
    })=>(
        <div>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-4xl font-bold mb-2">Learn</h1>
                    <p>Choose a category to start learning</p>
                </div>
                <SearchBox
                    onSearch={setSearchQuery}
                    placeholder="Search Categories"
                />
            </div>

            <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3  mt-5">
                {mockData.filter(category=>(!searchQuery||category.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                ).map(category=>(
                            <Card key={category.id} onClick={()=>{setSelectedCategory(category);setSearchQuery("")}} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-center">
                                        {category.name}
                                        <ChevronRight></ChevronRight>
                                    </CardTitle>
                                    <CardDescription>{category.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        )
                    )
                }

            </div>
        </div>
    )
export default CategorySelection