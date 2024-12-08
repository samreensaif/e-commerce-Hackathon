"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MinusIcon, PlusIcon, Star, StarHalf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface ProductImage {
  src: string
  alt: string
}

export default function Spmain() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)

  const productImages: ProductImage[] = [
    { src: "/sp1.png", alt: "Asgaard sofa front view" },
    { src: "/sp2.png", alt: "Asgaard sofa side view" },
    { src: "/sp3.png", alt: "Asgaard sofa detail view" },
    { src: "/sp4.png", alt: "Asgaard sofa back view" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mb-[58px]">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "border-2 rounded-lg overflow-hidden",
                  selectedImage === index ? "border-primary" : "border-transparent"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <Image
              src={"/SPmain.png"}
              alt={productImages[selectedImage].alt}
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Asgaard sofa</h1>
            <p className="text-2xl text-muted-foreground mt-2">Rs. 250,000.00</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFC700] text-primary border-b-[1px] border-[#FFC700] gap-[6px]" />
              ))}
              <StarHalf className="w-5 h-5 fill-primary text-primary gap-[6px]  border-b-[1px] border-[#FFC700]" />
            </div>
            <span className="text-sm text-muted-foreground">5 Customer Review</span>
          </div>

          <p className="text-muted-foreground">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup defaultValue="L" className="flex gap-4">
                <div>
                  <RadioGroupItem value="L" id="L" className="peer sr-only" />
                  <Label
                    htmlFor="L"
                    className="px-4 py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    L
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="XL" id="XL" className="peer sr-only" />
                  <Label
                    htmlFor="XL"
                    className="px-4 py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    XL
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="XS" id="XS" className="peer sr-only" />
                  <Label
                    htmlFor="XS"
                    className="px-4 py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    XS
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <RadioGroup defaultValue="purple" className="flex gap-4">
                <div>
                  <RadioGroupItem value="purple" id="purple" className="peer sr-only" />
                  <Label
                    htmlFor="purple"
                    className="w-8 h-8 rounded-full bg-purple-500 peer-data-[state=checked]:ring-2 ring-offset-2 ring-purple-500"
                  />
                </div>
                <div>
                  <RadioGroupItem value="black" id="black" className="peer sr-only" />
                  <Label
                    htmlFor="black"
                    className="w-8 h-8 rounded-full bg-black peer-data-[state=checked]:ring-2 ring-offset-2 ring-black"
                  />
                </div>
                <div>
                  <RadioGroupItem value="gold" id="gold" className="peer sr-only" />
                  <Label
                    htmlFor="gold"
                    className="w-8 h-8 rounded-full bg-yellow-700 peer-data-[state=checked]:ring-2 ring-offset-2 ring-yellow-700"
                  />
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-md w-[123px] h-[64px]"> 
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-none"
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-none "
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-[215px] h-[64px] rounded-[15px] ">Add To Cart</Button>
              <Button variant="outline" className="w-[215px] h-[64px] rounded-[15px]">+ Compare</Button>
            </div>
          </div>

          <div className="border-t pt-6 space-y-2">
            <div className="flex gap-2">
              <span className="text-muted-foreground">SKU:</span>
              <span>SS001</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-muted-foreground">Share:</span>
              <div className="flex gap-2">
                <Link href="#" className="hover:text-primary">
                  <svg
                    className=" w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}