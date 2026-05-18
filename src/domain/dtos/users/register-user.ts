


export class RegisterUserDto {

    private constructor(
        public readonly name: string,
        public readonly lastName: string, 
        public readonly email: string,
        public readonly password: string,
        public readonly cel: string,
        public readonly userType: string,
    ){}


    static create( props: {[key:string]: any}): [string?, RegisterUserDto?]{

        const { name, last_name, email, password, cel,user_type } = props;

        if( !name ) return ['Name property is required', undefined];
        if( !last_name ) return ['Last Name property is required', undefined];
        if( !email ) return ['Email property is required', undefined];
        if( !password ) return ['Password property is required', undefined];
        if( password.length < 8 ) return ['Password too short', undefined];

        if( !cel  ) return ['Cel property is required', undefined];
        if( !user_type ) return ['User type property is required', undefined];



        return [undefined, new RegisterUserDto( name, last_name, email, password, cel, user_type )];

    }

}