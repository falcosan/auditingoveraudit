import { getCurrentInstance } from "vue";
export default function () {
  const ctx = getCurrentInstance();
  function hasSlot(slotName = "default") {
    return !!ctx.slots[slotName];
  }
  return {
    hasSlot,
  };
}
