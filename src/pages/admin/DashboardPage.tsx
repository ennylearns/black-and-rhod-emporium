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
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-500">Admin Dashboard</h1>
                        <p className="text-zinc-400 text-sm sm:text-base">Manage your product inventory and uploads.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button onClick={handleAddNew} className="bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-semibold w-full sm:w-auto">
                            <Plus className="mr-2 h-4 w-4" /> Add Product
                        </Button>
                        <Button variant="outline" onClick={handleLogout} className="bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-semibold w-full sm:w-auto">
                            <LogOut className="mr-2 h-4 w-4" /> Logout
                        </Button>
                    </div>
                </div>

                {/* Mobile View: Cards */}
                <div className="block lg:hidden space-y-4">
                    {loading ? (
                        <div className="text-center py-10 text-zinc-500">Loading products...</div>
                    ) : products.length === 0 ? (
                        <div className="text-center py-10 text-zinc-500">No products found.</div>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 flex gap-4 items-center">
                                <img
                                    src={product.image_url || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-16 h-16 object-cover rounded border border-zinc-800 flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold truncate">{product.name}</h3>
                                    <p className="text-cyan-500 font-medium">₦{product.price.toLocaleString()}</p>
                                    <p className={`text-xs ${product.in_stock ? "text-green-500" : "text-red-500"}`}>
                                        {product.in_stock ? "In Stock" : "Out of Stock"}
                                    </p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => handleEdit(product)} className="hover:bg-zinc-800 border border-zinc-800">
                                    <Edit className="h-4 w-4 text-cyan-500" />
                                </Button>
                            </div>
                        ))
                    )}
                </div>

                {/* Desktop View: Table */}
                <div className="hidden lg:block rounded-md border border-zinc-800 bg-zinc-900/50">
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
                                        <TableCell>₦{product.price.toLocaleString()}</TableCell>
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
