
import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

export const description = "A radial chart with text"

function getCssVariable(variableName) {
  // This line reads the value that var(--chart-1) *represents*
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

const chartData = [
  { browser: "safari",score:100, fill: "foreground" },
]

const chartConfig = {

}



export function ChartRadialText({chartUserData}) {
  return (
    <Card className="flex flex-col max-w-[350px] max-h-[290px]">
      <CardHeader className="items-center pb-0 text-lg">
        <CardTitle>{chartUserData.title}</CardTitle>
        {/* <CardDescription>January - June </CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[150px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={chartUserData.end}
            innerRadius={65}
            outerRadius={90}
            className="fill-primary"
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[69, 60]}
            />
            <RadialBar dataKey="score" background cornerRadius={10}/>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartUserData.score.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground "
                        >
                          Score
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {chartUserData.description}<TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
        </div>
      </CardFooter>
    </Card>
  )
}
