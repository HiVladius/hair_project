export interface Product {
  id: string;
  name: string;
  input: number;
  output: number;
  stock: number;
  total: number;
}

export interface PreviewModalProps {
  product: Partial<Product>;
  onConfirm: () => void;
  onCancel: () => void;
}
