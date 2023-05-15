import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Input,
	HStack,
	Box,
	ButtonGroup,
	Heading,
	Divider,
	Select
} from '@chakra-ui/react';
import { Field, FieldArray, Formik } from 'formik';
import { type TeammateEntity } from './teammatesForm';
import { MdAddCircleOutline } from 'react-icons/md';
import React from 'react';

interface TeamFormValues {
	title: string;
	localization: { city: string; address: string };
	members: TeammateEntity[];
}

type TeamFormProps = {
	values?: TeamFormValues;
	members?: TeammateEntity[];
	onSubmitCb: (...args: any) => void;
	onCancelCb: (...args: any) => void;
};

const TeamForm: React.FC<TeamFormProps> = ({ values, members, onSubmitCb, onCancelCb }) => {
	const initialValues: TeamFormValues = {
		title: '',
		localization: { city: '', address: '' },
		members: [...(members || [])],
		...values
	};

	return (
		<Box>
			<Formik
				initialValues={{ ...initialValues }}
				onSubmit={values => {
					alert(JSON.stringify(values, null, 2));
					if (typeof onSubmitCb !== undefined) onSubmitCb();
				}}>
				{({ values, handleSubmit, errors, touched }) => (
					<form onSubmit={handleSubmit}>
						<Box pt={4}>
							<FormControl isInvalid={!!errors.title && touched.title}>
								<FormLabel htmlFor="title">Nom de l'équipe *</FormLabel>
								<Field
									as={Input}
									id="title"
									name="title"
									type="text"
									validate={(value: string) => {
										let error;

										if (value.length < 1) {
											error = 'Team title must contain at least 1 characters';
										}

										return error;
									}}
								/>
								<FormErrorMessage>{errors.title}</FormErrorMessage>
							</FormControl>
						</Box>
						<HStack spacing={4} pt={4} align="flex-start">
							<FormControl isInvalid={!!errors.localization?.city && touched.localization?.city}>
								<FormLabel htmlFor="city">Ville</FormLabel>
								<Field as={Input} id="city" name="city" type="text" />
								<FormErrorMessage>{errors.localization?.city}</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={!!errors.localization?.address && touched.localization?.address}>
								<FormLabel htmlFor="address">Adresse</FormLabel>
								<Field as={Input} id="address" name="address" type="text"></Field>
							</FormControl>
						</HStack>
						<Divider pt={8} borderColor="#292448" />
						<Box pt={8}>
							<Heading
								size="md"
								color={'#292448'}
								marginBottom={4}
								minH={'40px'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'space-between'}>
								Collaboratrices{' '}
							</Heading>
							<FieldArray
								name="members"
								render={({ form, push, remove }) => (
									<>
										{values?.members && values.members.length > 0
											? values.members.map((_, index) => (
													<React.Fragment key={index}>
														<Box pt={index > 0 ? 8 : 0}>
															<HStack spacing={4} align="flex-start">
																<FormControl
																	isInvalid={!!form.getFieldMeta(`firstname-${index}`).error}>
																	<FormLabel htmlFor={`firstname-${index}`}>Prénom *</FormLabel>
																	<Field
																		as={Input}
																		id={`firstname-${index}`}
																		name={`firstname-${index}`}
																		type="text"
																	/>
																	<FormErrorMessage>
																		{form.getFieldMeta(`firstname-${index}`).error}
																	</FormErrorMessage>
																</FormControl>
																<FormControl
																	isInvalid={!!form.getFieldMeta(`lastname-${index}`).error}>
																	<FormLabel htmlFor={`lastname-${index}`}>Nom *</FormLabel>
																	<Field
																		as={Input}
																		id={`lastname-${index}`}
																		name={`lastname-${index}`}
																		type="text"
																	/>
																	<FormErrorMessage>
																		{form.getFieldMeta(`lastname-${index}`).error}
																	</FormErrorMessage>
																</FormControl>
															</HStack>
															<Box pt={4}>
																<FormControl
																	isInvalid={
																		!!form.getFieldMeta(`email-${index}`).error &&
																		form.getFieldMeta(`email-${index}`).touched
																	}>
																	<FormLabel htmlFor={`email-${index}`}>Email</FormLabel>
																	<Field
																		as={Input}
																		id={`email-${index}`}
																		name={`email-${index}`}
																		type="email"
																	/>
																	<FormErrorMessage>
																		{form.getFieldMeta(`email-${index}`).error}
																	</FormErrorMessage>
																</FormControl>
															</Box>
															<HStack spacing={4} pt={4} align="flex-start">
																<FormControl
																	isInvalid={
																		!!form.getFieldMeta(`job-${index}`).error &&
																		form.getFieldMeta(`lastname-${index}`).touched
																	}>
																	<FormLabel htmlFor={`job-${index}`}>Poste *</FormLabel>
																	<Field
																		as={Input}
																		id={`job-${index}`}
																		name={`job-${index}`}
																		type="text"
																	/>
																	<FormErrorMessage>
																		{form.getFieldMeta(`job-${index}`).error}
																	</FormErrorMessage>
																</FormControl>
																<FormControl>
																	<FormLabel htmlFor={`contract-${index}`}>Contrat</FormLabel>
																	<Field
																		as={Select}
																		id={`contract-${index}`}
																		name={`contract-${index}`}>
																		<option value="">Choisir une option</option>
																		<option value="cdi">CDI</option>
																		<option value="cdd">CDD</option>
																		<option value="freelance">Freelance</option>
																		<option value="other">Autre</option>
																	</Field>
																</FormControl>
																<FormControl
																	isInvalid={
																		!!form.getFieldMeta(`hours-${index}`).error &&
																		form.getFieldMeta(`hours-${index}`).touched
																	}>
																	<FormLabel htmlFor={`hours-${index}`}>Heures / sem *</FormLabel>
																	<Field
																		as={Input}
																		id={`hours-${index}`}
																		name={`hours-${index}`}
																		type="number"
																	/>
																	<FormErrorMessage>
																		{form.getFieldMeta(`hours-${index}`).error}
																	</FormErrorMessage>
																</FormControl>
															</HStack>
															<Box pt={8} pb={8}>
																<Button
																	background="none"
																	color="#292448"
																	border="2px solid #292448"
																	borderRadius="md"
																	size="md"
																	fontSize="1rem"
																	leftIcon={<MdAddCircleOutline />}
																	onClick={() => {
																		remove(index);
																		console.log('Remove');
																	}}>
																	Retirer la collaboratrice
																</Button>
															</Box>
															<Divider w={'50%'} m="auto" />
														</Box>
													</React.Fragment>
											  ))
											: null}
										<Box pt={8}>
											<Button
												background="#292448"
												color="white"
												border="2px solid #292448"
												borderRadius="md"
												size="md"
												fontSize="1rem"
												leftIcon={<MdAddCircleOutline />}
												onClick={() =>
													push({
														firstname: '',
														lastname: '',
														email: '',
														job: '',
														team: '',
														contract: '',
														hours: 0
													})
												}>
												Ajouter une collaboratrice
											</Button>
										</Box>
									</>
								)}
							/>
						</Box>
						<Divider pt={8} />
						<Box pt={8}>
							<ButtonGroup display="flex">
								<Button
									type="reset"
									flex="1"
									background="none"
									color="#292448"
									border="2px solid #292448"
									borderRadius="md"
									size="md"
									fontSize="1rem"
									onClick={onCancelCb}>
									Annuler
								</Button>
								<Button
									type="submit"
									flex="2"
									background="#292448"
									color="white"
									border="2px solid #292448"
									borderRadius="md"
									size="md"
									fontSize="1rem">
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

export default TeamForm;
