// import AppError from '../errors/AppError';

import User from '../models/User';

interface UserDTO {
    name: string;
    second_name: string;
    email: string;
    phone_number: string;
    password: string;
}

class CreateUserService {
    public async execute({
        email,
        name,
        password,
        phone_number,
        second_name,
    }: UserDTO): Promise<User | null> {
        return null;
    }
}

export default CreateUserService;
