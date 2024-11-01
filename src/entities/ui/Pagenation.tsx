import { useAtom } from "jotai"
import { Button } from "../../shared/ui/Button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui/select"
import { limitAtom, skipAtom } from "../../app/atom"
import usePosts from "../../features/api/hooks/post/usePosts"

const Pagination = () => {
  const [limit, setLimit] = useAtom(limitAtom)
  const [skip, setSkip] = useAtom(skipAtom)
  const { total } = usePosts()

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <Select value={limit.toString()} onValueChange={(value) => setLimit(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <Button disabled={skip === 0} onClick={() => setSkip(Math.max(0, skip - limit))}>
          이전
        </Button>
        <Button disabled={skip + limit >= total} onClick={() => setSkip(skip + limit)}>
          다음
        </Button>
      </div>
    </div>
  )
}
export default Pagination
