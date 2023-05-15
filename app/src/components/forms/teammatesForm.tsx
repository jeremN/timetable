import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Input,
	HStack,
	Box,
	ButtonGroup,
	Select
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';

export interface TeammateEntity {
	firstname: string;
	lastname: string;
	email: string;
	job: string;
	team: string;
	contract: string;
	hours: number;
}

type TeammatesFormProps = {
	values?: TeammateEntity;
	onSubmitCb: (...args: any) => void;
	onCancelCb: (...args: any) => void;
};

const TeammatesForm: React.FC<TeammatesFormProps> = ({ values, onSubmitCb, onCancelCb }) => {
	const initialValues: TeammateEntity = {
		firstname: '',
		lastname: '',
		email: '',
		job: '',
		team: '',
		contract: '',
		hours: 0,
		...values
	};

	return (
		<Box>
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					alert(JSON.stringify(values, null, 2));
					onSubmitCb();
				}}>
				{({ handleSubmit, errors, touched, isSubmitting }) => (
					<form onSubmit={handleSubmit}>
						<HStack spacing={4} align="flex-start">
							<FormControl isInvalid={!!errors.firstname && touched.firstname}>
								<FormLabel htmlFor="firstname">Prénom *</FormLabel>
								<Field as={Input} id="firstname" name="firstname" type="text" />
								<FormErrorMessage>{errors.firstname}</FormErrorMessage>
							</FormControl>
							<FormControl isInvalid={!!errors.lastname && touched.lastname}>
								<FormLabel htmlFor="lastname">Nom *</FormLabel>
								<Field
									as={Input}
									id="lastname"
									name="lastname"
									type="text"
									validate={(value: string) => {
										let error;

										if (value.length < 6) {
											error = 'Password must contain at least 6 characters';
										}

										return error;
									}}
								/>
								<FormErrorMessage>{errors.lastname}</FormErrorMessage>
							</FormControl>
						</HStack>
						<Box pt={4}>
							<FormControl isInvalid={!!errors.email && touched.email}>
								<FormLabel htmlFor="email">Email</FormLabel>
								<Field
									as={Input}
									id="email"
									name="email"
									type="email"
									validate={(value: string) => {
										let error;

										if (value.length < 6) {
											error = 'Email must contain at least 6 characters';
										}

										return error;
									}}
								/>
								<FormErrorMessage>{errors.email}</FormErrorMessage>
							</FormControl>
						</Box>
						<HStack spacing={4} pt={4} align="flex-start">
							<FormControl isInvalid={!!errors.job && touched.job}>
								<FormLabel htmlFor="job">Poste *</FormLabel>
								<Field as={Input} id="job" name="job" type="text" />
								<FormErrorMessage>{errors.job}</FormErrorMessage>
							</FormControl>
							<FormControl isInvalid={!!errors.contract && touched.contract}>
								<FormLabel htmlFor="contract">Contrat</FormLabel>
								<Field as={Select} id="contract" name="contract">
									<option value="">Choisir une option</option>
									<option value="cdi">CDI</option>
									<option value="cdd">CDD</option>
									<option value="freelance">Freelance</option>
									<option value="other">Autre</option>
								</Field>
							</FormControl>
							<FormControl isInvalid={!!errors.hours && touched.hours}>
								<FormLabel htmlFor="hours">Heures / sem *</FormLabel>
								<Field as={Input} id="hours" name="hours" type="number" />
								<FormErrorMessage>{errors.hours}</FormErrorMessage>
							</FormControl>
						</HStack>
						<Box pt={14}>
							<ButtonGroup display="flex">
								<Button type="reset" flex="1" onClick={onCancelCb} disabled={isSubmitting}>
									Annuler
								</Button>
								<Button type="submit" colorScheme="purple" flex="1" disabled={isSubmitting}>
									Créer
								</Button>
							</ButtonGroup>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default TeammatesForm;
