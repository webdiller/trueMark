import { Select, TextInput, Button, Icon, withTableCopy, withTableSettings, DropdownMenu } from "@gravity-ui/uikit"
import { BriefcaseBusiness, EllipsisVertical, Link, Plus, Search, UserLock } from "lucide-react"
import { useState } from "react"
import { Table, withTableActions } from "@gravity-ui/uikit"
import { Rows3, Grid2X2, Bookmark } from "lucide-react"
import clsx from "clsx"
import { Pagination, PaginationProps } from "@gravity-ui/uikit"
import React from "react"

type Props = {}
type PropsItems = {
  status: "draft" | "finish" | "active"
  dateRange: "4 мая, 11:34 - 14 мая, 11:34"
  dateFrom: "Опрос от 04.05.2025"
  type: "group" | "business"
}
type ViewProps = "grid" | "table"

const mockItems: PropsItems[] = [
  {
    status: "draft",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "group",
  },
  {
    status: "finish",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "group",
  },
  {
    status: "active",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "business",
  },
  {
    status: "draft",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "group",
  },
  {
    status: "finish",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "group",
  },
  {
    status: "active",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "business",
  },
  {
    status: "draft",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "group",
  },
  {
    status: "finish",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "group",
  },
  {
    status: "active",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "business",
  },
  {
    status: "active",
    dateRange: "4 мая, 11:34 - 14 мая, 11:34",
    dateFrom: "Опрос от 04.05.2025",
    type: "business",
  },
]

export const ViewSurveys = (props: Props) => {
  const [view, setView] = useState<ViewProps>("grid")

  const [state, setState] = React.useState({ page: 1, pageSize: 100 })

  const handleUpdate: PaginationProps["onUpdate"] = (page, pageSize) => setState((prevState) => ({ ...prevState, page, pageSize }))
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="text-32 font-semibold">Опросы</h1>
        <Button
          view="action"
          size="l">
          Создать опрос
        </Button>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative [&_input]:!pl-10">
            <TextInput
              size="l"
              className="min-w-[360px] bg-white"
              placeholder="Поиск по названию опроса"
            />
            <Search className="absolute top-1/2 left-2 ml-2 size-5 -translate-y-1/2 stroke-gray-400" />
          </div>
          <div>
            <Select
              size="l"
              placeholder="Статус">
              <Select.Option value="val_1">Статус 1</Select.Option>
              <Select.Option value="val_2">Статус 2</Select.Option>
              <Select.Option value="val_3">Статус 3</Select.Option>
            </Select>
          </div>

          <Button
            view="outlined"
            size="l"
            className="w-9 min-w-9 !bg-white">
            <Bookmark className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2" />
          </Button>
        </div>

        <div className="flex items-center space-x-1.5 rounded-xl bg-black/5 p-1">
          <button
            onClick={() => setView("table")}
            className={clsx("relative h-8 w-11 rounded-lg transition-all duration-300", {
              "bg-white": view === "table",
            })}>
            <Rows3 className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 stroke-black" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={clsx("relative h-8 w-11 rounded-lg transition-all duration-300", {
              "bg-white": view === "grid",
            })}>
            <Grid2X2 className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 stroke-black" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-4 gap-6">
          {mockItems.map((item, indx) => {
            return (
              <div
                className="space-y-3 rounded-2xl bg-white p-4 shadow-sm"
                key={indx}>
                <div className="flex justify-between">
                  <span
                    className={clsx("mt-2", {
                      "text-orange": item.status === "draft",
                      "text-gray": item.status === "finish",
                      "text-green": item.status === "active",
                    })}>
                    Черновик
                  </span>
                  <button>
                    <Bookmark
                      onClick={() => alert("Action bookmark")}
                      className="size-6 stroke-gray-300"
                    />
                  </button>
                </div>
                <p>{item.dateRange}</p>
                <p className="line-clamp-2">{item.dateFrom} Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.</p>
                <div>
                  {item.type === "group" && (
                    <span className="bg-icon-busines relative inline-flex size-6 items-center justify-center rounded-full">
                      <UserLock className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 stroke-white" />
                    </span>
                  )}
                  {item.type === "business" && (
                    <span className="bg-icon-blue relative inline-flex size-6 items-center justify-center rounded-md">
                      <BriefcaseBusiness className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 stroke-white" />
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-end space-x-2">
                  <button>
                    <Link className="size-5" />
                  </button>
                  <div>
                    <DropdownMenu
                      renderSwitcher={(props) => (
                        <button
                          className="translate-y-0.5"
                          {...props}>
                          <EllipsisVertical className="size-5 stroke-black/50" />
                        </button>
                      )}
                      items={[
                        {
                          action: () => alert("Rename"),
                          text: "Rename",
                        },
                        {
                          action: () => alert("Delete"),
                          text: "Delete",
                          theme: "danger",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Pagination
        className="mt-8"
        page={1}
        pageSize={100}
        total={1000}
        onUpdate={handleUpdate}
      />
    </div>
  )
}
