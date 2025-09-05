import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => setIsOpen(!isOpen);

	// Состояния для всех полей формы (убираем все заглушки)
	const [selectedFontFamily, setSelectedFontFamily] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState(
		defaultArticleState.fontSizeOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState(
		defaultArticleState.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [selectedContentWidth, setSelectedContentWidth] = useState(
		defaultArticleState.contentWidth
	);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					{/* Поле "Шрифт" */}
					<div>
						<Text as={'span'} size={12} uppercase={true}>
							Шрифт
						</Text>
						<Select
							title={''}
							selected={selectedFontFamily}
							options={fontFamilyOptions}
							placeholder={'Выберите шрифт'}
							onChange={setSelectedFontFamily}
						/>
					</div>

					{/* Поле "Размер текста" */}
					<div>
						<Text as={'span'} size={12} uppercase={true}>
							Размер
						</Text>
						<RadioGroup
							name={'text-size'}
							title={''}
							selected={selectedFontSize}
							options={fontSizeOptions}
							onChange={setSelectedFontSize}
						/>
					</div>

					{/* Поле "Цвет текста" */}
					<div>
						<Text as={'span'} size={18} uppercase={false}>
							Цвет
						</Text>
						<Select
							title={''}
							selected={selectedFontColor}
							options={fontColors}
							placeholder={'Выберите цвет'}
							onChange={setSelectedFontColor}
						/>
					</div>

					<Separator />

					<div>
						{/* Поле "Цвет фона" */}
						<div>
							<Text as={'span'} size={12} uppercase={true}>
								Цвет фона
							</Text>
							<Select
								title={''}
								selected={selectedBackgroundColor}
								options={backgroundColors}
								placeholder={'Выберите цвет фона'}
								onChange={setSelectedBackgroundColor}
							/>
						</div>

						{/* Поле "Ширина контента" */}
						<div>
							<Text as={'span'} size={12} uppercase={true}>
								Ширина
							</Text>
							<Select
								title={''}
								selected={selectedContentWidth}
								options={contentWidthArr}
								placeholder={'Выберите ширину'}
								onChange={setSelectedContentWidth}
							/>
						</div>
					</div>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
