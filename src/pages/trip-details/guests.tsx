import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Victor Prado</span>
              <span className="block text-sm text-zinc-400 truncate">
                prado.victor1005@gmail.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Leticia Silva</span>
              <span className="block text-sm text-zinc-400 truncate">
                leticia@gmail.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>
        </div>

        <Button variant="secondary" size="full">
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  )
}