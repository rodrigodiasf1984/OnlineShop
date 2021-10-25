/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

interface IFormInputs {
  name: string;
  description: string;
  price: number;
  image: File[];
}

const schema = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().positive().integer().required(),
  image: Yup.mixed().required(),
});

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = async (data: IFormInputs) => {
    const formattedData = new FormData();
    formattedData.append('image', data.image[0]);
    formattedData.append('name', data.name);
    formattedData.append('description', data.description);
    formattedData.append('price', data.price.toString());
    await api.post('product', formattedData);
    toast.success('Product saved');
    history.push('/');
  };

  return (
    <Container>
      <h1>Admin</h1>
      <section className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Product Name</label>
            <input {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Product description</label>
            <input {...register('description')} />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div>
            <label>Product price</label>
            <input
              type="number"
              {...register('price', { valueAsNumber: true })}
            />
            {errors.price && <p>{errors.price.message}</p>}
          </div>
          <div>
            <label>Image</label>
            <input type="file" {...register('image')} />
            {errors.image && <p>{errors.image}</p>}
          </div>
          <button type="submit">Save</button>
        </form>
      </section>
    </Container>
  );
};

export default Admin;
