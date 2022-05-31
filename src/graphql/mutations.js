/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      amount
      description
      paper
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      amount
      description
      paper
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      amount
      description
      paper
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSleep = /* GraphQL */ `
  mutation CreateSleep(
    $input: CreateSleepInput!
    $condition: ModelSleepConditionInput
  ) {
    createSleep(input: $input, condition: $condition) {
      id
      description
      pattern
      paper
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSleep = /* GraphQL */ `
  mutation UpdateSleep(
    $input: UpdateSleepInput!
    $condition: ModelSleepConditionInput
  ) {
    updateSleep(input: $input, condition: $condition) {
      id
      description
      pattern
      paper
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSleep = /* GraphQL */ `
  mutation DeleteSleep(
    $input: DeleteSleepInput!
    $condition: ModelSleepConditionInput
  ) {
    deleteSleep(input: $input, condition: $condition) {
      id
      description
      pattern
      paper
      createdAt
      updatedAt
      owner
    }
  }
`;
