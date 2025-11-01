"use client"

import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Button
        variant={selectedCategory === "همه" ? "default" : "outline"}
        onClick={() => onSelectCategory("همه")}
        className="whitespace-nowrap"
      >
        همه محصولات
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="whitespace-nowrap"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
