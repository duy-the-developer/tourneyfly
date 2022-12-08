import { useUser } from '@auth0/nextjs-auth0'

type TProps = { cStyle: string }

const ProfileImage = ({ cStyle }: TProps) => {
	const { user } = useUser()

	return (
		<picture>
			{user && (
				<picture>
					<source srcSet={user.picture!} />
					<img
						className={`${cStyle} rounded-full`}
						src={user.picture!}
						alt="profile image"
					/>
				</picture>
			)}
		</picture>
	)
}

export default ProfileImage
