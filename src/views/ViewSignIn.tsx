import { Button, TextInput } from "@gravity-ui/uikit"
import { Link } from "@tanstack/react-router"

type Props = {}

export const ViewSignIn = (props: Props) => {
  return (
    <div className="space-y-4 rounded-lg p-10 shadow-[0_0_20px_10px_rgba(0,0,0,0.1)]">
      <p className="text-2xl font-medium">Войти</p>
      <p>
        Нет аккаунта?{" "}
        <Link
          to="/sign-up"
          className="text-yellow-500 underline">
          Зарегистрироваться
        </Link>
      </p>
      <form className="space-y-2">
        <TextInput
          size="xl"
          placeholder="Email"
        />
        <TextInput
          size="xl"
          placeholder="Пароль"
        />
        <Button
          size="xl"
          view="action"
          width="max"
          type="submit">
          Войти
        </Button>
      </form>
      <div className="space-y-2">
        <p>
          Забыли пароль?{" "}
          <Link
            className="text-yellow-500 underline"
            to="/sign-up">
            Восстановить
          </Link>
        </p>
        <p>или войдите с помощью...</p>
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
