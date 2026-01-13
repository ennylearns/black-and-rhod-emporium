import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";

interface ProductEditorProps {
    product?: any;
    onClose: () => void;
    onSuccess: () => void;
}

const ProductEditor = ({ product, onClose, onSuccess }: ProductEditorProps) => {
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        name: product?.name || "",
        description: product?.description || "",
        price: product?.price || 0,
        in_stock: product?.in_stock ?? true,
        image_url: product?.image_url || "",
        sizes: product?.sizes || [],
        colors: product?.colors || [],
    });

    const [sizesInput, setSizesInput] = useState(product?.sizes?.join(", ") || "");
    const [colorsInput, setColorsInput] = useState(product?.colors?.join(", ") || "");

    const handleArrayInput = (field: 'sizes' | 'colors', value: string) => {
        if (field === 'sizes') setSizesInput(value);
        if (field === 'colors') setColorsInput(value);

        const arr = value.split(',').map(item => item.trim()).filter(item => item !== '');
        setFormData(prev => ({ ...prev, [field]: arr }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `product-images/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('products')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('products')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image_url: publicUrl }));
            toast.success("Image uploaded successfully!");
        } catch (error: any) {
            toast.error("Error uploading image: " + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (product?.id) {
                const { error } = await supabase
                    .from("products")
                    .update(formData)
                    .eq("id", product.id);
                if (error) throw error;
                toast.success("Product updated successfully");
            } else {
                const { error } = await supabase
                    .from("products")
                    .insert([formData]);
                if (error) throw error;
                toast.success("Product created successfully");
            }
            onSuccess();
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] bg-zinc-900 border-zinc-800 text-zinc-100 p-0 flex flex-col overflow-hidden">
                <DialogHeader className="px-6 pt-6 pb-4 shrink-0">
                    <DialogTitle className="text-xl font-bold">
                        {product ? "Edit Product" : "Add New Product"}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    <div className="px-6 overflow-y-auto flex-1 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-zinc-950 border-zinc-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="price">Price (₦)</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                    required
                                    className="bg-zinc-950 border-zinc-800"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                className="bg-zinc-950 border-zinc-800 min-h-[100px]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="sizes">Sizes (comma separated)</Label>
                                <Input
                                    id="sizes"
                                    value={sizesInput}
                                    onChange={e => handleArrayInput('sizes', e.target.value)}
                                    placeholder="S, M, L, XL"
                                    className="bg-zinc-950 border-zinc-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="colors">Colors (comma separated)</Label>
                                <Input
                                    id="colors"
                                    value={colorsInput}
                                    onChange={e => handleArrayInput('colors', e.target.value)}
                                    placeholder="Black, White, Red"
                                    className="bg-zinc-950 border-zinc-800"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Product Image</Label>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="bg-zinc-950 border-zinc-800 hover:bg-zinc-800 relative w-full sm:w-auto"
                                        disabled={uploading}
                                    >
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            onChange={handleImageUpload}
                                            accept="image/*"
                                        />
                                        {uploading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <Upload className="h-4 w-4 mr-2" />}
                                        {uploading ? "Uploading..." : "Upload Image"}
                                    </Button>
                                    {formData.image_url && (
                                        <img src={formData.image_url} alt="Preview" className="h-12 w-12 sm:h-10 sm:w-10 object-cover rounded border border-zinc-800 shrink-0" />
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 pt-2 md:pt-8">
                                <Label htmlFor="in_stock">In Stock</Label>
                                <Switch
                                    id="in_stock"
                                    checked={formData.in_stock}
                                    onCheckedChange={checked => setFormData({ ...formData, in_stock: checked })}
                                />
                            </div>
                        </div>

                        {/* Extra padding at bottom for mobile scroll */}
                        <div className="h-4"></div>
                    </div>

                    <DialogFooter className="px-6 py-4 border-t border-zinc-800 shrink-0 flex-col-reverse sm:flex-row gap-2">
                        <Button type="button" variant="ghost" onClick={onClose} className="hover:bg-zinc-800 w-full sm:w-auto">
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-semibold w-full sm:w-auto" disabled={loading}>
                            {loading && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
                            {product ? "Update Product" : "Create Product"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ProductEditor;
