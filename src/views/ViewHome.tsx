import React from 'react'
import {Alert} from '@gravity-ui/uikit';
import { Link } from '@tanstack/react-router';

type Props = {}

export const ViewHome = (props: Props) => {
  return (
    <div className='container space-y-2 py-10 flex flex-col'>
      <Link to='/sign-up'>Регистрация</Link>
      <Link to='/sign-in'>Вход</Link>
      <Link to='/surveys'>Опросы</Link>
    </div>
  )
}