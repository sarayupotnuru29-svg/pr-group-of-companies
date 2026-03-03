import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const serviceOptions = [
  "Real Estate", "Import & Export", "Trading", "Coil Project",
  "Iron Ore Project", "Gold & Diamonds", "Hospital Project",
  "Government Projects", "Palmyrah Fiber", "Bone Crushing", "Gold Bonds",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  address: z.string().trim().min(1, "Address is required").max(500),
  service: z.string().min(1, "Please select a service"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be exactly 10 digits"),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", address: "", service: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const message = `Hello PR Group of Companies,\nMy Name: ${form.name}\nEmail: ${form.email}\nAddress: ${form.address}\nService Required: ${form.service}\nContact Number: ${form.phone}`;
    window.open(`https://wa.me/916300381586?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Input placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <Input placeholder="Email ID" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <Textarea placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} />
        {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
      </div>
      <div>
        <Select value={form.service} onValueChange={(val) => update("service", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
      </div>
      <div>
        <Input placeholder="Contact Number (10 digits)" value={form.phone} onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} />
        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
      </div>
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3">
        Send via WhatsApp
      </Button>
    </form>
  );
};

export default ContactForm;
