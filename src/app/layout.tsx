import type { Metadata } from 'next'
import { LayoutMain } from 'components';
import 'styles'
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = (props) => {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  )
}

export default RootLayout
