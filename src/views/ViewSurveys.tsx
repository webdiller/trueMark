import { Select, TextInput, Button, Icon, withTableCopy, withTableSettings } from "@gravity-ui/uikit"
import { Search } from "lucide-react"
import { Bookmark, Plus, LayoutRows3, Rectangles4 } from "@gravity-ui/icons"

type Props = {}

export const ViewSurveys = (props: Props) => {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="text-32 font-semibold">Опросы</h1>
        <Button
          view="action"
          size="l">
          <Icon
            data={Plus}
            size={18}
          />
          Создать опрос
        </Button>
      </div>

      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TextInput
            size="l"
            className="min-w-[360px] bg-white"
            leftContent={<Search className="ml-2 size-4 stroke-gray-400 pr-0.5" />}
            placeholder="Поиск по названию опроса"
          />
          <Select
            className="bg-white"
            size="l"
            placeholder="Статус">
            <Select.Option value="val_1">Статус 1</Select.Option>
            <Select.Option value="val_2">Статус 2</Select.Option>
            <Select.Option value="val_3">Статус 3</Select.Option>
          </Select>

          <Button
            view="outlined"
            size="l"
            className="w-9 min-w-9 !bg-white">
            <Bookmark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </Button>
        </div>

        <div className="flex items-center space-x-1.5 rounded-xl bg-black/5 p-1">
          <div>
            <Button
              view="outlined"
              size="m"
              className="min-h-[30px] w-9 min-w-9 overflow-hidden rounded-lg !bg-white">
              <LayoutRows3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </Button>
          </div>
          <div>
            <Button
              view="outlined"
              size="m"
              className="min-h-[30px] w-9 min-w-9 overflow-hidden rounded-lg !bg-white">
              <Rectangles4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
