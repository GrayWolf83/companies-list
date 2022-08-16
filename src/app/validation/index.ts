import * as yup from 'yup'

export const addCompanySchema = yup.object().shape({
	address: yup
		.string()
		.required({
			name: 'address',
			text: 'Поле "Адрес" обязательно для заполнения',
		})
		.min(2, {
			name: 'address',
			text: 'Длина поля "Адрес" не менее 2 символов',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Наименование" не менее 2 символов',
		})
		.trim(),
})

export const addEmployeeSchema = yup.object().shape({
	position: yup
		.string()
		.required({
			name: 'position',
			text: 'Поле "Должность" обязательно для заполнения',
		})
		.min(2, {
			name: 'position',
			text: 'Длина поля "Должность" не менее 2 символов',
		})
		.trim(),
	lastName: yup
		.string()
		.required({
			name: 'lastName',
			text: 'Поле "Фамилия" обязательно для заполнения',
		})
		.min(2, {
			name: 'lastName',
			text: 'Длина поля "Фамилия" не менее 2 символов',
		})
		.trim(),
	firstName: yup
		.string()
		.required({
			name: 'firstName',
			text: 'Поле "Имя" обязательно для заполнения',
		})
		.min(2, {
			name: 'firstName',
			text: 'Длина поля "Имя" не менее 2 символов',
		})
		.trim(),
})

export const searchCompanySchema = yup.object().shape({
	value: yup
		.string()
		.required({
			name: 'value',
			text: 'Поле "Поиск" обязательно для заполнения',
		})
		.trim(),
})
