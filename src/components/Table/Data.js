const getData = async () => {
  const uri = 'https://reqres.in/api/users';
  const resp = await fetch(uri);
  const json = await resp.json();
  const data = json.data;
  return data;
}

export const DATA = getData();

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'First Name',
    accessor: 'first_name'
  },
  {
    Header: 'Last Name',
    accessor: 'last_name'
  },
  {
    Header: 'Avatar',
    accessor: 'avatar'
  }
]