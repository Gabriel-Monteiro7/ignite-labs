import { FileArrowDown, Image } from 'phosphor-react'

export type variantsType = {
  exclusiveWallpapers: string
  complementaryMaterial: string
}

export const variants = {
  exclusiveWallpapers: {
    title: 'Wallpapers exclusivos',
    icon: <Image data-testid="ImageIcon" />,
    description:
      'Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina'
  },
  complementaryMaterial: {
    title: 'Material complementar',
    icon: <FileArrowDown data-testid="FileArrowDownIcon" />,
    description:
      'Acesse o material complementar para acelerar o seu desenvolvimento'
  }
}
