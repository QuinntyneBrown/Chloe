using Dtos;
using System.Collections.Generic;

namespace Services.Contracts
{
    public interface IProviderService
    {
        ProviderDto Add(ProviderDto dto);
        bool Remove(int id);
        ICollection<ProviderDto> Get();
        ICollection<BundleDto> GetBundlesByProviderId(int id);
    }
}
