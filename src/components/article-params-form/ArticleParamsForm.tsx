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

	// заглушки для состояния формы
	const selectedFontFamily = defaultArticleState.fontFamilyOption;
	const selectedFontSize = defaultArticleState.fontSizeOption;
	const selectedFontColor = defaultArticleState.fontColor;
	const selectedBackgroundColor = defaultArticleState.backgroundColor;
	const selectedContentWidth = defaultArticleState.contentWidth;

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					{/* Поле "Шрифт" */}
					<div>
						{/* Заголовок поля */}
						<Text
							as={'span'} // возможно не тот
							size={12}
							uppercase={true}>
							Шрифт
						</Text>
						{/* Выпадающий список. Пока используем базовый Select */}
						<Select
							title={''} // возможно, заголовок здесь не нужен
							selected={selectedFontFamily} // передаем выбранный элемент
							options={fontFamilyOptions} // передаем массив опций
							placeholder={'Выберите шрифт'}
							onChange={() => {}} // заглушка, пока ничего не делает
						/>
					</div>

					{/* Поле "Размер текста" */}
					<div>
						<Text as={'span'} size={12} uppercase={true}>
							Размер
						</Text>
						{/* Пробуем использовать RadioGroup. Возможно, его заголовок будет мешать. */}
						<RadioGroup
							name={'text-size'} // обязательный пропс
							title={''}
							selected={selectedFontSize} // выбранная опция
							options={fontSizeOptions} // массив опций для радио-кнопок
							onChange={() => {}} // заглушка
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
							onChange={() => {}}
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
								selected={selectedBackgroundColor} // Используем цвет фона
								options={backgroundColors} // Массив цветов фона
								placeholder={'Выберите цвет фона'}
								onChange={() => {}}
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
								onChange={() => {}}
							/>
						</div>
					</div>

					{/* 4. Сепаратор и кнопки уже есть, оставляем их */}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
