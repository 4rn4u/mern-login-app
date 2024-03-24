import {useForm} from 'react-hook-form'

function RegisterPage() {
  const {register} = useForm()
    return(
      <div>
          <form action="">
        <input type="text"
          {...register('username', { required: true })}
          />
        <input type="email" {...register('email', { required: true })}/>
        <input type="password" {...register('password', { required: true })}/>
          </form>
      
      </div>
    )
  }

export default RegisterPage