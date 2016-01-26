using Dtos;
using System.Collections.Generic;

namespace Services.Contracts
{
    public interface IBundleService
    {
        BundleDto Add(BundleDto dto);
        bool Remove(int id);
        ICollection<BundleDto> Get();
    }
}
