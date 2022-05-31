/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        description
        paper
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSleep = /* GraphQL */ `
  query GetSleep($id: ID!) {
    getSleep(id: $id) {
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
export const listSleeps = /* GraphQL */ `
  query ListSleeps(
    $filter: ModelSleepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSleeps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        pattern
        paper
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
