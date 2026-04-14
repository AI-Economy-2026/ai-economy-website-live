import { permanentRedirect, notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/product-details';

type Props = { params: Promise<{ id: string }> };

export default async function LegacyProductRoute({ params }: Props) {
  const { id } = await params;

  if (id === 'ai-toolkit') {
    permanentRedirect('/tools');
  }

  const product = getProductBySlug(id);
  if (!product) {
    notFound();
  }

  permanentRedirect(`/${product.section}/${product.slug}`);
}
