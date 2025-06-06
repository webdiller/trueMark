import { Button, Checkbox, TextInput } from "@gravity-ui/uikit"
import { Link } from "@tanstack/react-router"

type Props = {}

export const ViewSignUp = (props: Props) => {
  return (
    <div className="space-y-4 rounded-lg p-10 shadow-[0_0_20px_10px_rgba(0,0,0,0.1)]">
      <p className="text-2xl font-medium">Зарегистрироваться</p>
      <p>
        Есть аккаунт?{" "}
        <Link
          to="/sign-in"
          className="text-yellow-500 underline">
          Войти
        </Link>
      </p>
      <form className="space-y-2">
        <TextInput
          size="xl"
          placeholder="Email"
        />
        <div>
          <label className="flex space-x-2">
            <Checkbox
              className="mt-1"
              size="l"
            />
            <span>
              Я принимаю{" "}
              <Link
                className="text-yellow-500 underline"
                target="_blank"
                to="/">
                Правила пользования сервисом
              </Link>{" "}
              и <br />{" "}
              <Link
                className="text-yellow-500 underline"
                target="_blank"
                to="/">
                Политику конфиденциальности
              </Link>
            </span>
          </label>
        </div>
        <Button
          size="xl"
          view="action"
          width="max"
          type="submit">
          Продолжить
        </Button>
      </form>
      <div className="space-y-2">
        <p>или зарегистрируйтесь с помощью...</p>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <Button>Яндекс</Button>
          </div>
          <div>
            <Button>Вк</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
