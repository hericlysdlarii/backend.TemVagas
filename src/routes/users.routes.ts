import { Router } from 'express';
import multer from 'multer';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
    const { name, second_name, email, phone_number, password } = request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({
        name,
        second_name,
        email,
        phone_number,
        password,
    });

    delete user.password;

    return response.status(200).json(user);
});

usersRouter.post('/', async (request, response) => {
    // TODO - Cadastrar
});

usersRouter.get('/', async (request, response) => {
    // TODO - Listar
});

usersRouter.delete('/:id', async (request, response) => {
    // TODO - Deletar
});

usersRouter.put('/:id', async (request, response) => {
    // TODO - Editar
});

// Upload foto perfil
usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    async (request, response) => {
        const updateUserAvatarService = new UpdateUserAvatarService();
        const user = await updateUserAvatarService.execute({
            user_id: request.user.id,
            avatarFileName: request.file.filename,
        });

        delete user.password;

        return response.status(200).json(user);
    },
);

export default usersRouter;
