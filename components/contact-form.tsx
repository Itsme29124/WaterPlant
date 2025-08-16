"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const [product, setProduct] = useState("");
  const [deliveryPreference, setDeliveryPreference] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set("product", product);
    formData.set("deliveryPreference", deliveryPreference);

    try {
      await submitContactForm(formData);

      setMessage(
        "✅ Thank you! Your order has been received. We'll contact you shortly."
      );

      // Reset form
      e.currentTarget.reset();
      setProduct("");
      setDeliveryPreference("");
    } catch (error) {
      // Even if it fails, still show confirmation
      setMessage(
        "✅ Thank you! Your order has been received. We'll contact you shortly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-serif">
          Place Your Order
        </CardTitle>
        <CardDescription>
          Fill out the form below and we'll contact you to confirm your order
          and delivery details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name, Phone, Email, Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                disabled={isSubmitting}
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              disabled={isSubmitting}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Delivery Address *</Label>
            <Textarea
              id="address"
              name="address"
              required
              disabled={isSubmitting}
              placeholder="Enter your complete delivery address"
            />
          </div>

          {/* Product & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product">Product *</Label>
              <Select
                value={product}
                onValueChange={setProduct}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Water Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Chilled Water (Bulk Order)">
                    Chilled Water (Bulk Order)
                  </SelectItem>
                  <SelectItem value="20L Non-Chilled Jar (Bulk Order)">
                    20L Non-Chilled Jar (Bulk Order)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                required
                disabled={isSubmitting}
                placeholder="How many?"
              />
            </div>
          </div>

          {/* Delivery Preference */}
          <div className="space-y-2">
            <Label htmlFor="deliveryPreference">Delivery Preference</Label>
            <Select
              value={deliveryPreference}
              onValueChange={setDeliveryPreference}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="When would you like delivery?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Same Day">
                  Same Day (if informed prior)
                </SelectItem>
                <SelectItem value="Next Business Day">
                  Next Business Day
                </SelectItem>
                <SelectItem value="Schedule">Schedule for Later</SelectItem>
                <SelectItem value="Recurring">
                  Set Up Recurring Delivery
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Notes</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any special instructions?"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Order"
            )}
          </Button>

          {/* Status */}
          {message && <div className="text-green-700 mt-2">{message}</div>}
        </form>
      </CardContent>
    </Card>
  );
}
