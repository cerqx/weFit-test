import { CompletedPurchaseComponent } from "@/components/CompletedPurchase";

import { useCompletedPurchaseController } from "./useCompletedPurchaseController";


export function CompletedPurchase() {
  const { navigate } = useCompletedPurchaseController();
  return (
    <CompletedPurchaseComponent buttonFn={() => navigate('/')} />
  )
}