// Code generated by mockery v2.28.1. DO NOT EDIT.

package cache

import (
	context "context"

	mock "github.com/stretchr/testify/mock"
)

// MockAutoSync is an autogenerated mock type for the AutoSync type
type MockAutoSync[T interface{}] struct {
	mock.Mock
}

// Get provides a mock function with given fields: ctx
func (_m *MockAutoSync[T]) Get(ctx context.Context) (T, error) {
	ret := _m.Called(ctx)

	var r0 T
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) (T, error)); ok {
		return rf(ctx)
	}
	if rf, ok := ret.Get(0).(func(context.Context) T); ok {
		r0 = rf(ctx)
	} else {
		r0 = ret.Get(0).(T)
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(ctx)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTNewMockAutoSync interface {
	mock.TestingT
	Cleanup(func())
}

// NewMockAutoSync creates a new instance of MockAutoSync. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewMockAutoSync[T interface{}](t mockConstructorTestingTNewMockAutoSync) *MockAutoSync[T] {
	mock := &MockAutoSync[T]{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
