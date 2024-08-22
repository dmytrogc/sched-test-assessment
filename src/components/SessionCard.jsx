import SessionTypeChip from "./SessionTypeChip";

const SessionCard = ({ name, description, sessionType, roles }) => {
  const speakersData = roles.filter((role) => role.usertype === "speaker");
  const sessionTypes = sessionType.length ? sessionType.split(", ") : [];

  return (
    <div className="w-full p-8 mb-10 rounded-lg bg-white sm:p-9 md:p-7 xl:p-9">
      <h3 className="mb-4 line-clamp-1">
        <a
          href="/#"
          className="block text-xl font-semibold text-blue-600 text-center hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
        >
          {name}
        </a>
      </h3>

      {!!speakersData.length && (
        <div className="flex items-center gap-4 mb-5">
          <div className="flex -space-x-1">
            {[...new Array(3).fill(null)].map((_, index) => (
              <img
                key={index}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-400"
                src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=t079TIvLJCn2fePWpCuKgzauHnehzuVvc4DUCecDBuw="
                alt="speaker"
              />
            ))}
          </div>

          <div className="inline-flex">
            {speakersData.map((speaker, index) => (
              <p key={index} className="font-semibold text-sm">
                {!!index && ", "}
                {speaker.name}
              </p>
            ))}
          </div>
        </div>
      )}

      <p
        className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="flex gap-2">
        {sessionTypes.map((type, index) => (
          <SessionTypeChip key={index} type={type} />
        ))}
      </div>
    </div>
  );
};

export default SessionCard;
