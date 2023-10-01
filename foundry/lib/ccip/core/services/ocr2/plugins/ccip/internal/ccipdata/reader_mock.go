// Code generated by mockery v2.28.1. DO NOT EDIT.

package ccipdata

import (
	common "github.com/ethereum/go-ethereum/common"
	commit_store "github.com/smartcontractkit/chainlink/v2/core/gethwrappers/ccip/generated/commit_store"

	context "context"

	evm_2_evm_offramp "github.com/smartcontractkit/chainlink/v2/core/gethwrappers/ccip/generated/evm_2_evm_offramp"

	mock "github.com/stretchr/testify/mock"

	price_registry "github.com/smartcontractkit/chainlink/v2/core/gethwrappers/ccip/generated/price_registry"

	time "time"
)

// MockReader is an autogenerated mock type for the Reader type
type MockReader struct {
	mock.Mock
}

// GetAcceptedCommitReportsGteSeqNum provides a mock function with given fields: ctx, commitStoreAddress, seqNum, confs
func (_m *MockReader) GetAcceptedCommitReportsGteSeqNum(ctx context.Context, commitStoreAddress common.Address, seqNum uint64, confs int) ([]Event[commit_store.CommitStoreReportAccepted], error) {
	ret := _m.Called(ctx, commitStoreAddress, seqNum, confs)

	var r0 []Event[commit_store.CommitStoreReportAccepted]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, uint64, int) ([]Event[commit_store.CommitStoreReportAccepted], error)); ok {
		return rf(ctx, commitStoreAddress, seqNum, confs)
	}
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, uint64, int) []Event[commit_store.CommitStoreReportAccepted]); ok {
		r0 = rf(ctx, commitStoreAddress, seqNum, confs)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]Event[commit_store.CommitStoreReportAccepted])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, common.Address, uint64, int) error); ok {
		r1 = rf(ctx, commitStoreAddress, seqNum, confs)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetAcceptedCommitReportsGteTimestamp provides a mock function with given fields: ctx, commitStoreAddress, ts, confs
func (_m *MockReader) GetAcceptedCommitReportsGteTimestamp(ctx context.Context, commitStoreAddress common.Address, ts time.Time, confs int) ([]Event[commit_store.CommitStoreReportAccepted], error) {
	ret := _m.Called(ctx, commitStoreAddress, ts, confs)

	var r0 []Event[commit_store.CommitStoreReportAccepted]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, time.Time, int) ([]Event[commit_store.CommitStoreReportAccepted], error)); ok {
		return rf(ctx, commitStoreAddress, ts, confs)
	}
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, time.Time, int) []Event[commit_store.CommitStoreReportAccepted]); ok {
		r0 = rf(ctx, commitStoreAddress, ts, confs)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]Event[commit_store.CommitStoreReportAccepted])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, common.Address, time.Time, int) error); ok {
		r1 = rf(ctx, commitStoreAddress, ts, confs)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetExecutionStateChangesBetweenSeqNums provides a mock function with given fields: ctx, offRamp, seqNumMin, seqNumMax, confs
func (_m *MockReader) GetExecutionStateChangesBetweenSeqNums(ctx context.Context, offRamp common.Address, seqNumMin uint64, seqNumMax uint64, confs int) ([]Event[evm_2_evm_offramp.EVM2EVMOffRampExecutionStateChanged], error) {
	ret := _m.Called(ctx, offRamp, seqNumMin, seqNumMax, confs)

	var r0 []Event[evm_2_evm_offramp.EVM2EVMOffRampExecutionStateChanged]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, uint64, uint64, int) ([]Event[evm_2_evm_offramp.EVM2EVMOffRampExecutionStateChanged], error)); ok {
		return rf(ctx, offRamp, seqNumMin, seqNumMax, confs)
	}
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, uint64, uint64, int) []Event[evm_2_evm_offramp.EVM2EVMOffRampExecutionStateChanged]); ok {
		r0 = rf(ctx, offRamp, seqNumMin, seqNumMax, confs)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]Event[evm_2_evm_offramp.EVM2EVMOffRampExecutionStateChanged])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, common.Address, uint64, uint64, int) error); ok {
		r1 = rf(ctx, offRamp, seqNumMin, seqNumMax, confs)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetGasPriceUpdatesCreatedAfter provides a mock function with given fields: ctx, priceRegistry, chainSelector, ts, confs
func (_m *MockReader) GetGasPriceUpdatesCreatedAfter(ctx context.Context, priceRegistry common.Address, chainSelector uint64, ts time.Time, confs int) ([]Event[price_registry.PriceRegistryUsdPerUnitGasUpdated], error) {
	ret := _m.Called(ctx, priceRegistry, chainSelector, ts, confs)

	var r0 []Event[price_registry.PriceRegistryUsdPerUnitGasUpdated]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, uint64, time.Time, int) ([]Event[price_registry.PriceRegistryUsdPerUnitGasUpdated], error)); ok {
		return rf(ctx, priceRegistry, chainSelector, ts, confs)
	}
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, uint64, time.Time, int) []Event[price_registry.PriceRegistryUsdPerUnitGasUpdated]); ok {
		r0 = rf(ctx, priceRegistry, chainSelector, ts, confs)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]Event[price_registry.PriceRegistryUsdPerUnitGasUpdated])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, common.Address, uint64, time.Time, int) error); ok {
		r1 = rf(ctx, priceRegistry, chainSelector, ts, confs)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetTokenPriceUpdatesCreatedAfter provides a mock function with given fields: ctx, priceRegistry, ts, confs
func (_m *MockReader) GetTokenPriceUpdatesCreatedAfter(ctx context.Context, priceRegistry common.Address, ts time.Time, confs int) ([]Event[price_registry.PriceRegistryUsdPerTokenUpdated], error) {
	ret := _m.Called(ctx, priceRegistry, ts, confs)

	var r0 []Event[price_registry.PriceRegistryUsdPerTokenUpdated]
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, time.Time, int) ([]Event[price_registry.PriceRegistryUsdPerTokenUpdated], error)); ok {
		return rf(ctx, priceRegistry, ts, confs)
	}
	if rf, ok := ret.Get(0).(func(context.Context, common.Address, time.Time, int) []Event[price_registry.PriceRegistryUsdPerTokenUpdated]); ok {
		r0 = rf(ctx, priceRegistry, ts, confs)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]Event[price_registry.PriceRegistryUsdPerTokenUpdated])
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, common.Address, time.Time, int) error); ok {
		r1 = rf(ctx, priceRegistry, ts, confs)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// LatestBlock provides a mock function with given fields: ctx
func (_m *MockReader) LatestBlock(ctx context.Context) (int64, error) {
	ret := _m.Called(ctx)

	var r0 int64
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) (int64, error)); ok {
		return rf(ctx)
	}
	if rf, ok := ret.Get(0).(func(context.Context) int64); ok {
		r0 = rf(ctx)
	} else {
		r0 = ret.Get(0).(int64)
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(ctx)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewMockReader interface {
	mock.TestingT
	Cleanup(func())
}

// NewMockReader creates a new instance of MockReader. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewMockReader(t mockConstructorTestingTNewMockReader) *MockReader {
	mock := &MockReader{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
