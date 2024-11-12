import * as React from 'react';
import FormContainer from '../Form Container/FormContainer';
import { UrlData } from '../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/constants';
import DataTable from '../Data Table/DataTable';
import Features from '../Features/Features';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
      setReload(true)
  }

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The Response from the Server is : ",response)
    setData(response.data);
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  },[reload]);

  return (
    <div>
        <FormContainer updateReloadState={updateReloadState} />
        <DataTable updateReloadState={updateReloadState} data={data}/>
        <Features />
    </div>
  );
};

export default Container;
