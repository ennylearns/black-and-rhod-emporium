import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Plus, Edit, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ProductEditor from "@/components/admin/ProductEditor";

const DashboardPage = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            toast.error("Failed to fetch products");
        } else {
            setProducts(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin/login");
    };

    const handleEdit = (product: any) => {
        setSelectedProduct(product);
        setIsEditorOpen(true);
    };

    const handleAddNew = () => {
        setSelectedProduct(null);
        setIsEditorOpen(true);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                        <p className="text-zinc-400">Manage your product inventory and uploads.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button onClick={handleAddNew} className="bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-semibold">
                            <Plus className="mr-2 h-4 w-4" /> Add Product
                        </Button>
                        <Button variant="outline" onClick={handleLogout} className="border-zinc-800 hover:bg-zinc-900">
                            <LogOut className="mr-2 h-4 w-4" /> Logout
                        </Button>
                    </div>
                </div>

                <div className="rounded-md border border-zinc-800 bg-zinc-900/50">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-zinc-800 hover:bg-transparent">
                                <TableHead className="text-zinc-400">Image</TableHead>
                                <TableHead className="text-zinc-400">Name</TableHead>
                                <TableHead className="text-zinc-400">Price</TableHead>
                                <TableHead className="text-zinc-400">Stock</TableHead>
                                <TableHead className="text-zinc-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-10 text-zinc-500">
                                        Loading products...
                                    </TableCell>
                                </TableRow>
                            ) : products.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-10 text-zinc-500">
                                        No products found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                products.map((product) => (
                                    <TableRow key={product.id} className="border-zinc-800 hover:bg-zinc-900/50">
                                        <TableCell>
                                            <img
                                                src={product.image_url || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-12 h-12 object-cover rounded border border-zinc-800"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{product.name}</TableCell>
                                        <TableCell>${product.price}</TableCell>
                                        <TableCell>
                                            <span className={product.in_stock ? "text-green-500" : "text-red-500"}>
                                                {product.in_stock ? "In Stock" : "Out of Stock"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(product)} className="hover:bg-zinc-800">
                                                <Edit className="h-4 w-4 text-cyan-500" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {isEditorOpen && (
                <ProductEditor
                    product={selectedProduct}
                    onClose={() => setIsEditorOpen(false)}
                    onSuccess={() => {
                        setIsEditorOpen(false);
                        fetchProducts();
                    }}
                />
            )}
        </div>
    );
};

export default DashboardPage;
