"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { year: "2013", rank: 10, aircraft: "Marut" },
  { year: "2014", rank: 7, aircraft: "Zephyrus" },
  { year: "2015", rank: 6, aircraft: "Phoenix" },
  { year: "2016", rank: 6, aircraft: "Falcon" },
  { year: "2017", rank: 5, aircraft: "Albatross" },
  { year: "2018", rank: 11, aircraft: "Night Fury" },
  { year: "2019", rank: 9, aircraft: "Aurora" },
  { year: "2020", rank: 9, aircraft: "Hermes" },
  { year: "2021", rank: 11, aircraft: "The Black Darter" },
  { year: "2022", rank: 5, aircraft: "Moltres" },
  { year: "2023", rank: 11, aircraft: "Bumble Bee" },
  { year: "2024", rank: 13, aircraft: "Nimbus" },
  { year: "2025", rank: 16, aircraft: "Astra" },
];

const chartConfig = {
  rank: {
    label: "Rank",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartLineDots() {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg w-full">
      <CardContent className="p-0">
        {" "}
        {/* remove padding so chart touches edges */}
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{
                left: 20,
                right: 20,
                top: 30,
                bottom: 40,
              }}
            >
              <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />

              <XAxis
                dataKey="year"
                interval={0}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                angle={-45}
                textAnchor="end"
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
              />
              <YAxis
                reversed
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
              />

              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value, _name, props) => (
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {props.payload.aircraft}
                        </span>
                        <span className="text-muted-foreground">
                          Rank: {value}
                        </span>
                      </div>
                    )}
                  />
                }
              />

              <Line
                dataKey="rank"
                type="natural"
                stroke="#6366f1" // purple-blue gradientish tone
                strokeWidth={3}
                dot={{ fill: "#3b82f6" }}
                activeDot={{ r: 7, fill: "#2563eb" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
