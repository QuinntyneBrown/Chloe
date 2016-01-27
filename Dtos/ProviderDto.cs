using Models;

namespace Dtos
{
    public class ProviderDto
    {
        public ProviderDto(Provider provider)
        {
            this.Id = provider.Id;
            this.Name = provider.Name;
        }

        public ProviderDto()
        {

        }

        public string Name { get; set; }
        public int Id { get; set; }
    }
}
